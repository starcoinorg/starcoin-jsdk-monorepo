/// PropertyMap is a specialization of SimpleMap for Tokens.
/// It maps a String key to a PropertyValue that consists of type (string) and value (vecotr<u8>)
/// It provides basic on-chain serialization of primitive and string to property value with type information
/// It also supports deserializing property value to it original type.
module aptos_token::property_map {
    use std::bcs;
    use std::vector;
    use std::error;
    use std::string::{Self, String};
    use aptos_std::from_bcs;
    use aptos_std::simple_map::{Self, SimpleMap};
    use aptos_std::type_info::type_name;

    //
    // Constants
    //
    /// The maximal number of property that can be stored in property map
    const MAX_PROPERTY_MAP_SIZE: u64 = 1000;
    const MAX_PROPERTY_NAME_LENGTH: u64 = 128;


    //
    // Errors.
    //
    /// The property key already exists
    const EKEY_AREADY_EXIST_IN_PROPERTY_MAP: u64 = 1;

    /// The number of property exceeds the limit
    const EPROPERTY_NUMBER_EXCEED_LIMIT: u64 = 2;

    /// The property doesn't exist
    const EPROPERTY_NOT_EXIST: u64 = 3;

    /// Property key and value count don't match
    const EKEY_COUNT_NOT_MATCH_VALUE_COUNT: u64 = 4;

    /// Property key and type count don't match
    const EKEY_COUNT_NOT_MATCH_TYPE_COUNT: u64 = 5;

    /// Property type doesn't match
    const ETYPE_NOT_MATCH: u64 = 6;

    /// The name (key) of the property is too long
    const EPROPERTY_MAP_NAME_TOO_LONG: u64 = 7;


    //
    // Structs
    //

    struct PropertyMap has copy, drop, store {
        map: SimpleMap<String, PropertyValue>,
    }

    struct PropertyValue has store, copy, drop {
        value: vector<u8>,
        type: String,
    }

    public fun new(
        keys: vector<String>,
        values: vector<vector<u8>>,
        types: vector<String>
    ): PropertyMap {
        assert!(vector::length(&keys) <= MAX_PROPERTY_MAP_SIZE, error::invalid_argument(EPROPERTY_NUMBER_EXCEED_LIMIT));
        assert!(vector::length(&keys) == vector::length(&values), error::invalid_argument(EKEY_COUNT_NOT_MATCH_VALUE_COUNT));
        assert!(vector::length(&keys) == vector::length(&types), error::invalid_argument(EKEY_COUNT_NOT_MATCH_TYPE_COUNT));

        let properties = PropertyMap {
            map: simple_map::create<String, PropertyValue>(),
        };
        let i = 0;
        while (i < vector::length(&keys)) {
            let key = *vector::borrow(&keys, i);
            assert!(string::length(&key) <= MAX_PROPERTY_NAME_LENGTH, error::invalid_argument(EPROPERTY_MAP_NAME_TOO_LONG));
            simple_map::add(
                &mut properties.map,
                key,
                PropertyValue { value: *vector::borrow(&values, i), type: *vector::borrow(&types, i) }
            );
            i = i + 1;
        };
        properties
    }

    public fun empty(): PropertyMap {
        PropertyMap {
            map: simple_map::create<String, PropertyValue>(),
        }
    }

    public fun contains_key(map: &PropertyMap, key: &String): bool {
        simple_map::contains_key(&map.map, key)
    }

    public fun add(map: &mut PropertyMap, key: String, value: PropertyValue) {
        assert!(string::length(&key) <= MAX_PROPERTY_NAME_LENGTH, error::invalid_argument(EPROPERTY_MAP_NAME_TOO_LONG));
        assert!(!simple_map::contains_key(&map.map, &key), error::already_exists(EKEY_AREADY_EXIST_IN_PROPERTY_MAP));
        assert!(simple_map::length<String, PropertyValue>(&map.map) < MAX_PROPERTY_MAP_SIZE, error::invalid_state(EPROPERTY_NUMBER_EXCEED_LIMIT));
        simple_map::add(&mut map.map, key, value);
    }

    public fun length(map: &PropertyMap): u64 {
        simple_map::length(&map.map)
    }

    public fun borrow(map: &PropertyMap, key: &String): &PropertyValue {
        let found = contains_key(map, key);
        assert!(found, EPROPERTY_NOT_EXIST);
        simple_map::borrow(&map.map, key)
    }

    public fun read_string(map: &PropertyMap, key: &String): String {
        let prop = borrow(map, key);
        assert!(prop.type == string::utf8(b"0x1::string::String"), error::invalid_state(ETYPE_NOT_MATCH));
        from_bcs::to_string(prop.value)
    }

    public fun read_u8(map: &PropertyMap, key: &String): u8 {
        let prop = borrow(map, key);
        assert!(prop.type == string::utf8(b"u8"), error::invalid_state(ETYPE_NOT_MATCH));
        from_bcs::to_u8(prop.value)
    }

    public fun read_u64(map: &PropertyMap, key: &String): u64 {
        let prop = borrow(map, key);
        assert!(prop.type == string::utf8(b"u64"), error::invalid_state(ETYPE_NOT_MATCH));
        from_bcs::to_u64(prop.value)
    }

    public fun read_address(map: &PropertyMap, key: &String): address {
        let prop = borrow(map, key);
        assert!(prop.type == string::utf8(b"address"), error::invalid_state(ETYPE_NOT_MATCH));
        from_bcs::to_address(prop.value)
    }

    public fun read_u128(map: &PropertyMap, key: &String): u128 {
        let prop = borrow(map, key);
        assert!(prop.type == string::utf8(b"u128"), error::invalid_state(ETYPE_NOT_MATCH));
        from_bcs::to_u128(prop.value)
    }

    public fun read_bool(map: &PropertyMap, key: &String): bool {
        let prop = borrow(map, key);
        assert!(prop.type == string::utf8(b"bool"), error::invalid_state(ETYPE_NOT_MATCH));
        from_bcs::to_bool(prop.value)
    }

    public fun borrow_value(property: &PropertyValue): vector<u8> {
        *&property.value
    }

    public fun borrow_type(property: &PropertyValue): String {
        *&property.type
    }

    public fun remove(
        map: &mut PropertyMap,
        key: &String
    ): (String, PropertyValue) {
        let found = contains_key(map, key);
        assert!(found, error::not_found(EPROPERTY_NOT_EXIST));
        simple_map::remove(&mut map.map, key)
    }

    /// Update the property in the existing property map
    /// Allow updating existing keys' value and add new key-value pairs
    public fun update_property_map(
        map: &mut PropertyMap,
        keys: vector<String>,
        values: vector<vector<u8>>,
        types: vector<String>,
    ) {
        let key_len = vector::length(&keys);
        let val_len = vector::length(&values);
        let typ_len = vector::length(&types);
        assert!(key_len == val_len, error::invalid_state(EKEY_COUNT_NOT_MATCH_VALUE_COUNT));
        assert!(val_len == typ_len, error::invalid_state(EKEY_COUNT_NOT_MATCH_TYPE_COUNT));

        let i = 0;
        while (i < vector::length(&keys)) {
            let prop_val = PropertyValue {
                value: *vector::borrow(&values, i),
                type: *vector::borrow(&types, i),
            };
            if (contains_key(map, vector::borrow(&keys, i))) {
                update_property_value(map, vector::borrow(&keys, i), prop_val);
            } else {
                add(map, *vector::borrow(&keys, i), prop_val);
            };
            i = i + 1;
        }
    }

    public fun update_property_value(
        map: &mut PropertyMap,
        key: &String,
        value: PropertyValue
    ) {
        let found = contains_key(map, key);
        assert!(found, error::not_found(EPROPERTY_NOT_EXIST));
        let property_val = simple_map::borrow_mut(&mut map.map, key);
        *property_val = value;
    }

    public fun create_property_value_raw(
        value: vector<u8>,
        type: String
    ): PropertyValue {
        PropertyValue {
            value,
            type,
        }
    }

    /// create a property value from generic type data
    public fun create_property_value<T: copy>(data: &T): PropertyValue {
        let name = type_name<T>();
        if (
            name == string::utf8(b"bool") ||
                name == string::utf8(b"u8") ||
                name == string::utf8(b"u64") ||
                name == string::utf8(b"u128") ||
                name == string::utf8(b"address") ||
                name == string::utf8(b"0x1::string::String")
        ) {
            create_property_value_raw(bcs::to_bytes<T>(data), name)
        } else {
            create_property_value_raw(bcs::to_bytes<T>(data), string::utf8(b"vector<u8>"))
        }
    }

    #[test_only]
    fun create_property_list(): PropertyMap {
        use std::string::utf8;
        let keys = vector<String>[ utf8(b"attack"), utf8(b"durability"), utf8(b"type")];
        let values = vector<vector<u8>>[ b"10", b"5", b"weapon" ];
        let types = vector<String>[ utf8(b"integer"), utf8(b"integer"), utf8(b"String") ];
        new(keys, values, types)
    }

    #[test]
    fun test_add_property(): PropertyMap {
        use std::string::utf8;
        let properties = create_property_list();
        add(
            &mut properties, utf8(b"level"),
            PropertyValue {
                value: b"1",
                type: utf8(b"integer")
            });
        assert!(
            borrow(&properties, &utf8(b"level")).value == b"1",
            EPROPERTY_NOT_EXIST);
        properties
    }

    #[test]
    fun test_update_property(): PropertyMap {
        use std::string::utf8;
        let properties = create_property_list();
        update_property_value(&mut properties, &utf8(b"attack"), PropertyValue { value: b"7", type: utf8(b"integer") });
        assert!(
            borrow(&properties, &utf8(b"attack")).value == b"7",
            1
        );
        properties
    }

    #[test]
    fun test_remove_property(): PropertyMap {
        use std::string::utf8;
        let properties = create_property_list();
        assert!(length(&mut properties) == 3, 1);
        let (_, _) = remove(&mut properties, &utf8(b"attack"));
        assert!(length(&properties) == 2, 1);
        properties
    }

    #[test_only]
    public fun test_create_property_value(type: String, value: vector<u8>): PropertyValue {
        PropertyValue {
            type,
            value
        }
    }

    #[test]
    fun test_read_value_with_type() {
        use std::string::utf8;
        let keys = vector<String>[ utf8(b"attack"), utf8(b"mutable")];
        let values = vector<vector<u8>>[ bcs::to_bytes<u8>(&10), bcs::to_bytes<bool>(&false) ];
        let types = vector<String>[ utf8(b"u8"), utf8(b"bool")];
        let plist = new(keys, values, types);
        assert!(!read_bool(&plist, &utf8(b"mutable")), 1);
        assert!(read_u8(&plist, &utf8(b"attack")) == 10, 1);
    }

    #[test]
    fun test_generate_property_value_convert_back() {
        let data: address = @0xcafe;
        let pv = create_property_value(&data);
        let pm = create_property_list();
        add(&mut pm, string::utf8(b"addr"), pv);
        assert!(read_address(&pm, &string::utf8(b"addr")) == data, 1)
    }
}

## BCS

Codes in this dir is mostly generated by https://github.com/novifinancial/serde-reflection.
Only a little modification.

## Type Inheritance Diagram

| types            | directory                               |
| ---------------- | --------------------------------------- |
| js(client level) | src/types/index.ts                      |
| starcoin_types   | src/lib/runtime/starcoin_types/index.ts |
| onchain_events   | src/lib/runtime/onchain_events/index.ts |
| bcs              | src/lib/runtime/bcs/index.ts            |
| serde            | src/lib/runtime/serde/index.ts          |

## Development

If you want to update the codes:

1. remove the old runtime dir, and use the cmd to rewrite.

```shell
./serdegen --language TypeScript --target-source-dir ./runtime --with-runtimes Bcs Serde ~/projects/starcoinorg/starcoin/etc/starcoin_types.yml
./serdegen --language TypeScript --target-source-dir ./runtime ~/projects/starcoinorg/starcoin/etc/onchain_events.yml
```

2. please use IDEs(like VS Code) to format code of this file `starcoin_types/index.ts` first.

3. Then use `git diff` to compare the changes, and cherry pick our modification back to the new generated runtime codes.
#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file:///Users/pub/Desktop/CodeSpace/frontend/bylite/node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:staged`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u68C0\u6D4B\u672A\u901A\u8FC7, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy9wdWIvRGVza3RvcC9Db2RlU3BhY2UvZnJvbnRlbmQvYnlsaXRlL25vZGVfbW9kdWxlcy8ucG5wbS90c25vQDIuMC4wL25vZGVfbW9kdWxlcy90c25vL2Rpc3QvY2xpZW50LmpzXCIpO1xuaW1wb3J0IHtcbiAgY29sb3JzXG59IGZyb20gXCIuL2NodW5rLUZIRFhYT0tZLmpzXCI7XG5cblxuLy8gc3JjL2NsaWVudC50c1xudmFyIGZldGNoID0gKHVybCwgaW5pdCkgPT4gaW1wb3J0KFwiLi9zcmMtNFE3UTY3QzMuanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdCh1cmwsIGluaXQpKTtcbnZhciBheGlvcyA9IChjb25maWcpID0+IGltcG9ydChcIi4vYXhpb3MtUElaNEM1VVouanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdChjb25maWcpKTtcbmV4cG9ydCB7XG4gIGF4aW9zLFxuICBjb2xvcnMsXG4gIGZldGNoXG59O1xuIiwgImltcG9ydCB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eC9jb3JlJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRPYmplY3QoXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQcm9jZXNzT3V0cHV0LFxuICBtZXRob2Q6ICdsb2cnIHwgJ3dhcm4nIHwgJ2Vycm9yJyA9ICdsb2cnXG4pIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZVttZXRob2RdKGAke2tleX06XFxuJHt2YWx1ZX1cXG5gKVxuICB9XG59XG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcblxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengnXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXG5pbXBvcnQgeyBwcmludE9iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmF3YWl0ICRgcG5wbSBzcGVsbGNoZWNrYC5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4gIGNvbnNvbGUubG9nKG91dClcblxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcbn0pXG5cbi8vIGF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50YF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbi8vICAgcHJpbnRPYmplY3Qob3V0KVxuLy8gICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcbi8vIH0pXG5cbi8vIGNoZWNrIHR5cGUgYW5kIHN0YWdlXG5hd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludDpzdGFnZWRgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuICBwcmludE9iamVjdChvdXQpXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcbiIsICIjIS91c3IvYmluL2VudiB6eFxuXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXG5cbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NENcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKVxuXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgob3V0KSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU2OEMwXHU2RDRCXHU2NzJBXHU5MDFBXHU4RkM3LCBcdThCRjdcdTY4QzBcdTY3RTVcdTRFRTNcdTc4MDEnKVxufSlcblxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKVxuXG5hd2FpdCAkYGdpdCBhZGQgLmBcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsU0FBUSxpQkFBaUIseUJBQXdCO0FBQWpELElBQThEQTtBQUE5RDtBQUFBO0FBQTBELElBQUlBLFdBQVEsa0JBQWtCLG9IQUFvSDtBQUFBO0FBQUE7OztBQ0VyTSxTQUFTLFlBQ2QsUUFDQSxTQUFtQyxPQUNuQztBQUNBLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBRWpELFlBQVEsUUFBUSxHQUFHO0FBQUEsRUFBUztBQUFBLENBQVM7QUFBQSxFQUN2QztBQUNGO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFHQSxTQUFTLFNBQVM7QUFIbEI7QUFBQTtBQUFBO0FBSUE7QUFFQSxVQUFNLG1CQUFtQixNQUFNLENBQUMsUUFBdUI7QUFDckQsY0FBUSxJQUFJLEdBQUc7QUFFZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBUUQsVUFBTSxRQUFRLElBQUksQ0FBQyxvQkFBb0IsbUJBQW1CLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBdUI7QUFDekYsa0JBQVksR0FBRztBQUNmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFBQTtBQUFBOzs7QUNyQkQ7QUFFQSxTQUFTLEtBQUFDLFVBQVM7QUFFbEIsUUFBUSxJQUFJLG1FQUFpQjtBQUU3QixNQUFNLHVDQUFrQixNQUFNLENBQUMsUUFBUTtBQUNyQyxRQUFNLElBQUksTUFBTSw0RUFBZ0I7QUFDbEMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K

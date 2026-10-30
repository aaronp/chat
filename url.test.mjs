// Checks the address-bar helpers in Main.dc.html's component script. Run: make test
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('./Main.dc.html', import.meta.url), 'utf8');
const js = /<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/.exec(html)[1];
const Component = new Function('DCLogic', js + '\nreturn Component;')(class {});

const s = Component.initialState(0, 7);
const at = (search) => Component.withQuery(s, search);

assert.equal(Component.toQuery(at(''), ''), '');
assert.deepEqual([at('?menu=display').menu, at('?menu=nope').menu], ['display', null]);
assert.equal(at('?history=closed').drawerOpen, false);
assert.equal(at('?theme=ink').roomTheme.preset, 'ink');
for (const id of ['paper', 'night', 'blueprint', 'warm']) assert.equal(at('?theme=' + id).roomTheme.preset, id);
assert.equal(at('?theme=toString').roomTheme.preset, 'campfire');
assert.equal(Component.toQuery(at('?theme=campfire'), '?theme=campfire'), '');
for (const q of ['?menu=room&history=closed&theme=daylight', '?x=1&menu=topic']) assert.equal(Component.toQuery(at(q), q), q);
console.log('url ok');

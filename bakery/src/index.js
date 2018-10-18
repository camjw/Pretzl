import { Expectation } from './expectation';
import { Bagel } from './bagel';
import { batch, bag, bite, nobag } from './describe';
import { preheatEach, runEveryPreheatEach, preheatAll, cooldownAll, cooldownEach, runEveryCooldownEach } from './seasonAll';

export { Bagel,
         bite,
         batch,
         bag,
         nobag,
         preheatEach,
         runEveryPreheatEach,
         preheatAll,
         cooldownEach,
         runEveryCooldownEach,
         cooldownAll
       }


// Glossary { Bagel = mock object,
//            batch = describe,
//            bag = it,
//            nobag = skip,
//            bite = expect,
//            preheatEach = beforeEach,
//            runEveryPreheatEach = beforeEach's function,
//            preheatAll = beforeAll,
//            cooldownAll = afterAll
//          }

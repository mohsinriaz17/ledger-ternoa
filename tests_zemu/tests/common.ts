import { DeviceModel } from '@zondax/zemu'

const Resolve = require('path').resolve

export const APP_SEED = 'equip will roof matter pink blind book anxiety banner elbow sun young'

const APP_PATH_S = Resolve('../app/output/app_s.elf')
const APP_PATH_X = Resolve('../app/output/app_x.elf')

export const models: DeviceModel[] = [
  { name: 'nanos', prefix: 'S', path: APP_PATH_S },
  { name: 'nanox', prefix: 'X', path: APP_PATH_X },
]

export const txBasic =
  '040000bf36245f8dd474e70eae4adacc92ec16c27c3899c70603c29b60044b77abe11503d2029649d5038d248ed73e0d9723000007000000b0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafeb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe'

export const txNomination =
  '06050c008e7d1ec97734fcbbe49e79713f082987cc752a87d08b9a7fc0931b7e7406aa5f00704c6bb1ab5caeaf4e92008fad09bc6e1dbffa49035bab194ea7f1380f70b9300087db8698c9f480fce25158219df3c9bb00a73d5a23979005a9dee9c8682f0338d5030003d20296499723000007000000b0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafeb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe'

export const setKeys =
    '0800165c75b37985e1f0b6a5d0384e65de32e0bdb47dd13fd378331710743f158291c87729615f565efdaea35fd1be37891db88609d5a158b45daf72cfcb7c69edb5abaab05a3a8bac376ca3be45b318e2d2058a3bc66e2aecab56278dc8fa1cd455cfff485a3bd8122d331abfbbb6d1bc1633e7ececdff2134752fa5a46e7810e789d0ad4c696614f2d306d787953f1e7a4f2ac16a0dbe9f8cc87f498328aebb8b9947b169cc02a0ab5c934063b2748707b0ef57ad13ddd45bb1b5179ccde5eafea0102660bcf978fee093b046cecae263c7caa97eb1532e64d9f1a8a7912a65085169801fad02cbe588527598a7de3d59ef26cb43f484cd12db965383b9adc799680390a5a47d51d7775085a2b7b6ce82b4e287e185ff7d11ce947cc68fb6d1f9725268309c8198ae398d722bdb09cf5f579a84cb1e77cb31068f9740faa6033a4da13d50300009723000007000000b0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafeb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe'

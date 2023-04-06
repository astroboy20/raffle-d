import 'styled-components'

import { colors } from './color'

type colorTokens = Partial<typeof colors>

declare module "styled-components"{
    export interface DefaultTheme{
        colors?:colorTokens
    }
}
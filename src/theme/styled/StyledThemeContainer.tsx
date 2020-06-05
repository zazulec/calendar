import styled from 'styled-components';
import { themeLight } from '../themeLight/themeLight';
import { themeDark } from '../themeDark/themeDark';

const StyledThemeContainer = styled.div`
    background: ${props => themeLight ? themeLight : themeDark};
    color: ${props => themeLight ? themeLight : themeDark};
`
//w trakcie tworzenia
export { StyledThemeContainer };
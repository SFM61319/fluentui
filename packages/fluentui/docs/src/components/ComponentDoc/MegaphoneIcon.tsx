import * as React from 'react';
import { createSvgIcon } from '@fluentui/react-icons-northstar';

const MegaphoneIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M23.067 9.875c.18.078.343.188.488.328.14.147.25.309.328.488s.117.37.117.567v7.484c0 .198-.039.387-.117.567s-.187.34-.328.48c-.145.147-.309.258-.488.336s-.368.117-.567.117c-.083 0-.198-.013-.344-.039l-4.312-1.008-.07.29a8.79 8.79 0 0 1-.18.718c-.052.167-.122.31-.21.43-.121.167-.29.289-.509.367s-.512.117-.883.117a4.37 4.37 0 0 1-.613-.05 6.64 6.64 0 0 1-.723-.145c-.609-.156-1.099-.36-1.468-.61-.464-.306-.696-.656-.696-1.046 0-.224.034-.438.102-.64a7.22 7.22 0 0 0 .188-.61l-3.626-.852a1.378 1.378 0 0 1-.82-.531 1.676 1.676 0 0 1-.246-.441 1.365 1.365 0 0 1-.09-.489v-1.406c0-.166.03-.33.09-.488.06-.158.142-.306.246-.442a1.38 1.38 0 0 1 .82-.53l13-3.04c.146-.025.261-.04.344-.04.199 0 .387.04.567.118zm-.684.898l-13 3.032a.48.48 0 0 0-.273.18.496.496 0 0 0-.11.312v1.406c0 .115.036.219.11.313a.476.476 0 0 0 .273.18l13 3.03.117.016c.136 0 .253-.05.352-.152s.148-.217.148-.348v-7.484c0-.13-.05-.246-.148-.348s-.216-.152-.352-.152l-.117.015zm-8.883 8.47c.177.26.56.479 1.149.655.234.074.473.128.719.164.244.038.455.055.632.055.13 0 .242-.006.336-.02a1.08 1.08 0 0 0 .274-.074l.257-1.054-3.109-.727-.258 1z" />
    </svg>
  ),
  displayName: 'MegaphoneIcon',
});

export default MegaphoneIcon;

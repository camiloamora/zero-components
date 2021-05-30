import React from 'react';
import Button from '../../atoms/Button/index';
import Icon from '../../atoms/Icon'

export default {
    title: 'Atoms/Button',
    component: Button,
}

export const Primary = () => <Button type="primary">Primary</Button>;
export const Secondary = () => <Button type="secondary">Secondary</Button>;
export const WithIcon = () => <Button type="secondary">Secondary <Icon type="right-arrow"></Icon> </Button>;
export const Tertiary = () => <Button type="tertiary">Button Tertiary</Button>;
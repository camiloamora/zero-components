import React from 'react';
import Heading from '../../atoms/Heading/index';

export default {
    title: 'Atoms/Heading',
    component: Heading,
}

export const Default = () => <Heading>Heading</Heading>;
export const Primary = () => <Heading color="primary">Heading</Heading>;
export const Small = () => <Heading size="sm">Heading</Heading>;
export const SuperSmall = () => <Heading size="xs">Heading</Heading>;
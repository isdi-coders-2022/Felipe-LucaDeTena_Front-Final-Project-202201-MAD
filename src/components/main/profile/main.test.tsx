import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import Main from './main';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Main />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/wishlist/i));
        });
    });
});

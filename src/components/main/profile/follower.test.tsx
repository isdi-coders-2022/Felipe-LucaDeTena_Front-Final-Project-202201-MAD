import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import Followers from './follower';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Followers />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Followers/i));
        });
    });
});

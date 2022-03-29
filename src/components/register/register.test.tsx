import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import SignUp from './register';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <SignUp />
                </MemoryRouter>
            );
            expect(screen.getAllByText(/Registration/i));
        });
    });
});

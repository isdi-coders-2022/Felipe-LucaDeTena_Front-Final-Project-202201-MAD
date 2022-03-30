import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import Main from './main';

describe('Given Form component', () => {
    const preloadedState = {
        loginRegister: {
            id: 'test',
            name: 'test',
            surName: 'test',
            email: 'test',
            password: 'test',
            profileImg: 'test',
            backImg: 'test',
            interFaceColor: 'grey',
            collections: [
                {
                    _id: '',
                    img: 'img-collection-test',
                    name: 'collection-test',
                    createdBy: 'ew',
                    totalPrice: 'qew',
                    items: [],
                    favourite: false,
                    likes: 123,
                },
            ],
            followers: [],
            following: [],
            isLogged: false,
        },
    };
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>,
            { preloadedState }
        );
    });
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            expect(screen.getAllByText(/wishlist/i));
        });
    });

    describe('When a user is logged', () => {
        test('Then the collections should be rendered', async () => {
            expect(await screen.findAllByRole('img')).toHaveLength(1);
        });
    });
});

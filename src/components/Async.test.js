import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', ()=>{
    test('renders the list if the request succeeds', async () => {
        render (<Async/>);
        const listItemElements = await screen.findAllByRole('listitem'); // if getAllByRole fails for async tasks
        expect(listItemElements).not.toHaveLength(0);
    });
        test('renders the list if the request succeeds [Mocks]', async () => {
            window.fetch = jest.fn();
            window.fetch.mockResolvedValueOnce({
                json: async () => [{ id: 'p1', title:'First post'}],
            });
        render (<Async/>);
        const listItemElements = await screen.findAllByRole('listitem'); // if getAllByRole fails for async tasks
        expect(listItemElements).not.toHaveLength(0);
    })
});
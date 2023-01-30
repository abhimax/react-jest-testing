import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', ()=>{
    test('renders the list if the request succeeds', async () => {
        render (<Async/>);
        const listItemElements = await screen.findAllByRole('listitem'); // if getAllByRole fails for async tasks
        expect(listItemElements).not.toHaveLength(0);
    })
});
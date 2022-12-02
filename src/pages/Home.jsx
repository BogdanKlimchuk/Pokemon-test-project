import React from 'react';
import PokeList from "../components/PokeList/PokeList";
import Pagination from "../components/Pagination/Pagination";
import Header from "../components/UI/Header/Header";

const Home = () => {

    return (
        <div className={'container'}>
            <Header tittle={'PokeDex'}/>
            <main className={'container'}>
                <PokeList />
                <Pagination />
            </main>

            {/*<footer>Footer</footer>*/}
        </div>
    );
};

export default Home;
import React, { useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import {apiGet} from "../misc/config";

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);

    const onSearch = () => {

        apiGet(`/search/shows?q=${input}`).then(result => {
            setResults(result);
            console.log(result);
            });
        };

    const onInputChange = (ev) => {
        setInput(ev.target.value);
        // console.log(ev.target.value);
    };

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13){
            onSearch();
        }
        // console.log(ev.keyCode);
    };

    const renderResults = () => {
        if(results && results.length === 0){
            return <div>No results</div>
        }

        if(results && results.length > 0) {
            return (<div>
                    {results.map((item) => (
                        <div key={item.show.id}>{item.show.name}</div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <MainPageLayout>
            <input type="text" placeholder="Search for something" onChange={onInputChange}  onKeyDown={onKeyDown} value={input} />

            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input id="shows-search" type="radio" />
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input id="actors-search" type="radio" />
                </label>
            </div>


            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
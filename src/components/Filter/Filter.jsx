import { useState } from "react";
import './filter.scss';


export function Filter({ filteredTask }) {
    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setFilter(value);
        filteredTask(value);
    };


    return (
        <div className="box-filter">
            <p className="text-filter">𝕱і𝖑𝖙𝖗-𝖕𝖔-і𝖒𝖊𝖓і</p>
            <input
                className="input-filter"
                type="text"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
}



















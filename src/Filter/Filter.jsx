import React, { useState } from 'react'
import InputController from '../input/InputController'
import filterContainer from './Filter.module.css'
import axios from 'axios'
import Visual from '../Visual'

const Filter = () => {
    const [items, setItems] = useState({});
    const [status, setStatus] = useState(false);
    const [inputs, setInputs] = useState({
        end_year: "",
        intensity: "",
        sector: "",
        topic: "",
        insight: "",
        url: "",
        region: "",
        start_year: "",
        impact: "",
        added: "",
        published: "",
        country: "",
        relevance: "",
        pestle: "",
        source: "",
        title: "",
        likelihood: ""
    })

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = async () => {
        try {
            let obj = {
                end_year: inputs.end_year,
                intensity: inputs.intensity,
                sector: inputs.sector,
                topic: inputs.topic,
                insight: inputs.insight,
                url: inputs.url,
                region: inputs.region,
                start_year: inputs.start_year,
                impact: inputs.impact,
                added: inputs.added,
                published: inputs.published,
                country: inputs.country,
                relevance: inputs.relevance,
                pestle: inputs.pestle,
                source: inputs.source,
                title: inputs.title,
                likelihood: inputs.likelihood
            }
            const response = await axios.post('http://localhost:3000/visual', obj);
            setItems(response.data);
            setStatus(true);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={filterContainer.main}>
            <div className={filterContainer.filter}>

                <InputController className={filterContainer.input} onChange={handleInputs} type='number' name='end_year' value={inputs.end_year} placeholder='' label='End Year' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='number' name='intensity' value={inputs.intensity} placeholder='' label='Intensity' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='number' name='relevance' value={inputs.relevance} placeholder='' label='Relevance' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='topic' value={inputs.topic} placeholder='' label='Topic' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='insight' value={inputs.insight} placeholder='' label='Insight' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='number' name='likelihood' value={inputs.likelihood} placeholder='' label='Likelihood' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='sector' value={inputs.sector} placeholder='' label='Sector' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='region' value={inputs.region} placeholder='' label='Region' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='country' value={inputs.country} placeholder='' label='Country' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='number' name='start_year' value={inputs.start_year} placeholder='' label='Start Year' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='pestle' value={inputs.pestle} placeholder='' label='Pestle' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='source' value={inputs.source} placeholder='' label='Source' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='title' value={inputs.title} placeholder='' label='Title' />
                <InputController className={filterContainer.input} onChange={handleInputs} type='text' name='url' value={inputs.url} placeholder='' label='Url' />




                <button className={filterContainer.button} type='submit' onClick={handleSubmit}>Apply Filter</button>

            </div>

            <div >
                {status && (
                    items.map((i) => {
                        return (
                            <div className={filterContainer.filterdata}>
                                <h3><li>End Year : {i.end_year}</li></h3>
                                <h3>Insight : {i.insight}</h3>
                                <h3>Relevance : {i.relevance}</h3>
                                <h3>Region : {i.region}</h3>
                                <h3>Title : {i.title}</h3>
                                <h3>Topic : {i.topic}</h3>
                                <h3>Start Year : {i.start_year}</h3>
                                <h3>Source : {i.source}</h3>
                                <h3>Added : {i.added}</h3>
                                <h3>Pestle : {i.pestle}</h3>
                                <h3>Published : {i.published}</h3>
                                <h3>Likelihood : {i.likelihood}</h3>
                                <h3>Country : {i.country}</h3>
                                <h3>Intensity : {i.intensity}</h3>
                                <h3>Country : {i.country}</h3>

                            </div>
                        )
                    })
                )}
            </div>
        </div>

    )
}

export default Filter
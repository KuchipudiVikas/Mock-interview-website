import { useContext } from 'react'
import { preferencesContext } from '../../contexts/preferences.context'
import options from './options'
import '../../routes/home/home.styles.css'


const SelectCard = () => {

    const { preferences, setPreferences } = useContext(preferencesContext);
    const handleChange = (e) => {
        const copyObj = { ...preferences };
        const { name, value } = e.target;
        if (value == 'remove') {
            const isExist = name in preferences;
            if (isExist) {
                delete copyObj[name];
                setPreferences({ ...copyObj })
            }
        }
        else {
            setPreferences(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    return (<>
        <div className='select-headline'>
            <h1>Select Topics </h1>
        </div>
        <div className="main">
            {
                options.map(obj => {
                    const cat = obj.category;
                    return (
                        <div className="">
                            <h4>{cat}</h4>
                            {obj.topics.map(topic => {
                                return (

                                    <div className="input-group mb-3" key={topic.name}>
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">{topic.name}</label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect01" onChange={handleChange} name={topic.name}>
                                            <option selected value='remove'>Choose...</option>
                                            {
                                                topic.levels.map(level => (
                                                    <option value={level} name={topic.name} onChange={handleChange}>{level}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                )
                            })}
                        </div>
                    )

                })
            }



        </div>
    </>
    )
}

export default SelectCard
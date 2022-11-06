import './SearchBox.css'



const SearchBox = () => {

    return (
        <div>
            <div className="SearchBox-container">
                <div className="SearchBox-mainForm">
                    <div className="fields-container">
                        <div className="form-field-container">
                            <p className="form-field-label">Выберите импорт/экспорт</p>
                            <select name="import/export" id="import/export" className={`select import/export-select`}>
                                <option value="СПБ">Импорт</option>
                                <option value="Москва">Экспорт</option>
                            </select>
                        </div>
                        <div className="form-field-container">
                            <p className="form-field-label">Cтрана</p>
                            <select name="import/export" id="import/export" className={`select import/export-select`}>
                                <option value="СПБ">Страна 1</option>
                                <option value="Москва">Страна 2</option>
                            </select>
                        </div>

                        <div className="form-field-container">
                            <p className="form-field-label">Период</p>
                            <input type="date"/>
                        </div>
                        <div className="form-field-container">
                            <p className="form-field-label">Код ТНВЕД</p>
                            <input type="number"/>
                        </div>
                        <div className={`form-field-container non-border`}>
                            <p className="form-field-label">Единицы измерения</p>
                            <input type="text"/>
                        </div>
                        <div className="form-field-container">
                            <p className="form-field-label">Стоимость</p>
                            <input type="number"/>
                        </div>
                        <div className="form-field-container">
                            <p className="form-field-label">Масса</p>
                            <input type="number"/>
                        </div>
                        <div className="form-field-container">
                            <p className="form-field-label">Код региона</p>
                            <input type="number"/>
                        </div>
                        <div className="form-field-container">
                            <p className="form-field-label">Код фед округа</p>
                            <input type="number"/>
                        </div>
                        <div className={`form-field-container non-border`}>
                            <p className="form-field-label">Раздел</p>
                            <select name="import/export" id="import/export" className={`select import/export-select`}>
                                <option value="СПБ">раздел 1</option>
                                <option value="Москва">раздел 2</option>
                            </select>
                        </div>
                        <div className={`form-field-container non-border`}>
                            <p className="form-field-label">Группа</p>
                            <select name="import/export" id="import/export" className={`select import/export-select`}>
                                <option value="СПБ">Группа 1</option>
                                <option value="Москва">Группа 2</option>
                            </select>
                        </div>
                        <div className={`form-field-container non-border`}>
                            <p className="form-field-label">Подгруппа</p>
                            <select name="import/export" id="import/export" className={`select import/export-select`}>
                                <option value="СПБ">Подгруппа 1</option>
                                <option value="Москва">Подгруппа 2</option>
                            </select>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default SearchBox;
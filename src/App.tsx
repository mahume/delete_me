import './App.css'
import {useTranslation} from "react-i18next";
import SuperDuper from "./components/SuperDuper.tsx";

function App() {
    const {t} = useTranslation(['button', 'copy', 'main']);

    return (
        <>
            <h1>{t('copy:heading')}</h1>
            <p>{t('copy:subHeading')}</p>
            <p>{t('main:text')}</p>
            <button>{t('primary')}</button>
            <SuperDuper isCool={true}/>
        </>
    )
}

export default App

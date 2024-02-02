import {FC} from "react";
import {useTranslation} from "react-i18next";

type SuperDuperProps = {
    isCool: boolean;
}

const SuperDuper: FC<SuperDuperProps> = () => {
    const {t} = useTranslation();

    return (
        <div>
            <p>{t('text')}</p>
            {/*<p>{t('button:primary')}</p>*/}
        </div>
    )
}

export default SuperDuper

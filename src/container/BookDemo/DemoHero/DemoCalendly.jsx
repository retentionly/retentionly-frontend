import React, { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { DemoCalendlyStyled } from './style';

const DemoCalendly = () => {

    const [loader, setLoader] = useState(false);
    const [isDoneScheduling, setDoneScheduling] = useState(false);
    const [isTimeSelected, setTimeSelected] = useState(false);

    useCalendlyEventListener({
        onEventScheduled: (e) => {
            setLoader(true);
            // updateUserStatus({
            //   email: user?.email,
            //   status: true
            // })
            // setTimeout(() => {
            //   setLoader(false);
            // }, 2000)
        },
    });

    const pageSettings = {
        primaryColor: "#F6C5C5",
        textColor: "#F6C5C5",
        backgroundColor: "#F6C5C5",
        hideLandingPageDetails: true,
        hideEventTypeDetails: false
    };

    function getCalendlyHeightToEnsureNoCrop() {

        if (!isTimeSelected) return { height: 800 };
        if (isDoneScheduling) return { height: 850 };
        return { height: 1060 };
    }

    return (
        <DemoCalendlyStyled>
            <div>
                <InlineWidget
                    url={"https://calendly.com/retentionly/demo"}
                    // pageSettings={pageSettings.current}
                    // prefill={prefill.current}
                    pageSettings={pageSettings}
                    
                    // prefill={prefill}
                    styles={getCalendlyHeightToEnsureNoCrop()}
                />
            </div>
        </DemoCalendlyStyled>
    )
}

export default DemoCalendly
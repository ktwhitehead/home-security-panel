import React, { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';

const Alarm = () => {
    const { alert } = useContext(AppContext)
    const snyth = window.speechSynthesis;
    const voices = synth.getVoices();
    const voice = voices.find(voice => voice.name === 'Google US English');

    // useEffect(() = > {
    //     if (alert) {

    //     }
    // });

    // const play
}

export default Alarm;

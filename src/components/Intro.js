import React, { Profiler } from 'react';

export default function Intro(props){
    return(
        <div>
            <h1 class="title-sm">Hey gang, my name is</h1>
            <h1 class="title-lrg">{props.name}</h1>
        </div>
    );
}

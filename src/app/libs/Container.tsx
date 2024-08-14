import React, {ReactNode} from 'react';

function Container({children}: {children: ReactNode}) {
    return (
        <div className={'max-w-[1100px] mx-auto'}>
            {children}
        </div>
    );
}

export default Container;
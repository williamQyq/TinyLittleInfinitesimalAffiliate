import { SmileOutline } from 'antd-mobile-icons';
import './BillBoard.scss';
import React from 'react';

interface Props {
}

const BillBoard: React.FC<{}> = () => {
    return (
        <div className='BillBoard'>
            <div className='BillBoard-header'>
                <SmileOutline className='logo rotate' />
                <p >Feature Unavilable</p>
                <p>This feature only available on Mobile View</p>
            </div>
        </div>
    );
}

export default BillBoard;

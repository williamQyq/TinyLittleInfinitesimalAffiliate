import "assets/BillBoard.scss";
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';

interface Props {
}

const BillBoard: React.FC<{}> = () => {
    return (
        <div className='BillBoard'>
            <div className='BillBoard-header'>
                <SmileOutlined className='logo rotate' />
                <p >Feature Unavilable</p>
                <p>This feature only available on Mobile View</p>
            </div>
        </div>
    );
}

export default BillBoard;

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '../components/homeHeader';
import Units from './units'
import Concepts from './concepts';
import Dashboard from './dashboard';
import { units } from '../utils/data';

const ThreeColumnsPage = () => {
    const router = useRouter();
    const [selectedUnitId, setSelectedUnitId] = useState<number>(0);

    const pageStyle: React.CSSProperties = {
        maxWidth: '1400px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
    };

    const columnTitleStyle: React.CSSProperties = {
        color: 'var(--foreground)',
        textAlign: 'left',
        padding: '1rem',
        borderBottom: '0.05rem solid var(--border)',
    };
    const columnsStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: '92vh',
        textAlign: 'center',
        flexWrap: 'nowrap',
        width: '100%',
        overflow: 'hidden',
        scrollbarWidth: 'none',
    };

    const columnStyle: React.CSSProperties = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflowY: 'auto',
        height: '100vh',
    };

    const ColumnOne = () => {
        return (
            <div style={{ flex: 1, minWidth: '250px' }}>
                <Dashboard courseName='Introduction to Data Structures & Algorithms'/>
            </div>
        );
    };

    const ColumnTwo = () => {
        return (
            <div style={{ flex: 2, minWidth: '300px', borderLeft: '0.1rem solid var(--border)' }}>
                <h2 style={columnTitleStyle}>Units</h2>
                <div style={columnStyle}>
                    <Units units={units} onUnitClick={setSelectedUnitId} />
                </div>
            </div>
        );
    };

    const ColumnThree = () => {
        const selectedUnit = units.find((unit) => unit.unit_id === selectedUnitId);
        const concepts = selectedUnit ? selectedUnit.concepts : [];
        const unitName = selectedUnit ? selectedUnit.name : 'Concepts';

        return (
            <div style={{ flex: 1, minWidth: '250px' }}>
                <h2 style={columnTitleStyle}>{unitName}</h2>
                <div style={{...columnStyle, borderLeft: '0.05rem solid var(--border)'}}>
                    <Concepts concepts={concepts} unitId = {selectedUnitId}/>
                </div>
            </div>
        );
    };

    return (
        <div style={pageStyle}>
            <Header />
            <div style={columnsStyle}>
                <ColumnOne />
                <ColumnTwo />
                <ColumnThree />
            </div>
        </div>
    );
};

export default ThreeColumnsPage;

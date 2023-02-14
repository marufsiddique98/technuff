export default function CounterText ({number,heading}) {

    return (
        <>
            <br />
            <span style={ { fontSize: '36px', fontWeight: 'bold', color: 'green' } }>{number}</span>
            <h2 style={ { fontSize: '22px', fontWeight: '400', color: 'black' } }>{heading}</h2>;
        </>
    )

}
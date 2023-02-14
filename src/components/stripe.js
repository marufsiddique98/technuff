export default function Stripe ( { color,clas } ) {

    return (
        <div className = { clas }>
            <div style={ {
                height: '3px',
                width: '150px',
                backgroundColor: color,
                marginTop: '15px',
                marginBottom: '15px'
            } }>
            </div>
        </div>
        
    );

}
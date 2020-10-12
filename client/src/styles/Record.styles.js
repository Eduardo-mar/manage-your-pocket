
const styles = props => {
    return `

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 2rem;

    .Delete{

        height: 3rem;
    }
    .Save{
        
        background: #32CD32;
        height: 3rem;
    }

    .date{

        max-width: 140px;
    }
    .amount{

        max-width: 75px;
    }
    >div {

        margin: 0 0.5rem;
        width: 100%;
        max-width: 200px;
    }
    
    `;
}

export default styles;
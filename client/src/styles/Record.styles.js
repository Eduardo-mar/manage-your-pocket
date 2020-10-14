
const styles = props => {
    return `
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 2rem;

    .save{

        color: #32CD32;
    
    }
    .Save:hover {

        background-color: rgba(50, 250, 50, 0.14);
    }

    .date{

        width: 140px;
    }
    .type{

        width: 150px;
    }
    .amount{

        width: 75px;
    }
    .account{

        width: 130px;
    }
    .text{

        width:150px;
    }
    >div {

        margin: 0 1.5rem;
        width: 100%;
        max-width: 200px;
    }
    
    `;
}

export default styles;
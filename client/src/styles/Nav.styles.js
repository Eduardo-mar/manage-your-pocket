export default props => {
    return `
        .appBar{
            z-index: 1201;
            transition: width 960ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 960ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
            background-color: #056f98;

            svg{
                fill: #FFFFFF;
            }

            button:hover{
                background-color: #0000001f;
            }

            &.open{
                width: calc(100% - 200px);
                transition: width 1100ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, margin 1100ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
                margin-left: 200px;
            }
        }

        .drawer {
            width: 200px;
            transition: width 1100ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
            >div{
                width: 200px;
                white-space: nowrap;
                transition: width 1100ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;

                .MuiListItemIcon-root{
                    margin-left: 8px;
                }
            }


            &.close{
                width: 73px;
                transition: width 960ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
                >div{
                    width: 73px;
                    overflow-x: hidden;
                    transition: width 960ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
                }
            }

            .toolbar{
                display: flex;
                padding: 0px 8px;
                align-items: center;
                justify-content: flex-end;
                min-height: 64px;
            }
        
        }
    `;
}
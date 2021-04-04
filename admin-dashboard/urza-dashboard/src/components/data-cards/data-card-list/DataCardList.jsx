export default function DataCardList(props) {

    return (
        <div className="col-lg-2 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Categorias
                    </h6>
                </div>
                <div className="card-body">
                    <ul>
                        {props.categories.map((category)=> {
                            return(
                                <li className="mb-2 font-weight-bold">{category[0] + ": " + category[1]}</li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
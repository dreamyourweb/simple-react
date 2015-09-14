Home = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        Meteor.subscribe("top40");
        return {
            top40Recs: Top40.find({}).fetch()
        };
    },
    render(){
        let top40list = this.data.top40Recs.map((rec) => {
            return (
                <JobEntry artist={rec.artist} title={rec.title}/>
            );
        });
        return(
            <div className="jumbotron">
                <div className="container"></div>
                    <h1 clasName="text-center">Simple react for Top40</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Artist</th>
                                <th>TItle</th>
                            </tr>
                            <tbody>
                            {top40list}
                        </tbody>
                        </thead>

                    </table>
            </div>

        );
    }
});
let JobEntry = React.createClass({
    render() {
        let artist = this.props.artist;
        let title = this.props.title;
        return (
            <tr>
                <td>{artist}</td>
                <td>{title}</td>
            </tr>
        );
    }
});
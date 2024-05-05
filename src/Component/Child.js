const Child = (props) => {

    const parentDataInChild = props.parentToChild;

    return (
        <>
            <h1>Child component</h1>
            <p>Parent data in child component:
                {parentDataInChild}</p>
        </>
    );
};

export default Child;
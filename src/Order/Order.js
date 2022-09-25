import { useForm } from "react-hook-form";
const Order = (props) => {

    let ElementOrders = null;
    if(props.orders !== null){
        ElementOrders = props.orders.map(or => <div key={or.id}><p>Name: {or.value.name}, Age: {or.value.age}</p></div>)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        props.addOrderThunk(data.name, data.age);
        console.log(data);
        reset();
    };

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder="name" {...register("name",
                        {
                            required: true,
                            minLength: 3,
                            maxLength: 20
                        }
                    )}
                    />
                    {errors.name && errors.name.type ==="required" && <p>This field is required</p>}
                    {errors.name && errors.name.type ==="minLength" && <p>Min length 8</p>}
                    {errors.name && errors.name.type ==="maxLength" && <p>Max length 20</p>}
                </div>
                <div>
                    <input placeholder="age" {...register("age",
                        {
                            required: true
                        }
                    )}
                    />
                    {errors.age && errors.age.type ==="required" && <p>This field is required</p>}
                </div>
                <div>
                    <button type={"submit"}>Submit</button>
                    {props.error === null ? null : <div>{props.error}</div>}
                </div>
            </form>
            TotalCount = {props.totalCount}
            {ElementOrders}
        </div>
    )
}

export default Order;
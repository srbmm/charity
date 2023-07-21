import React, {useEffect} from 'react';
import {Theme} from "../../components";
import {useForm} from "react-hook-form"
import {Label, Select, TextInput, Button} from "flowbite-react";
import {postCash} from "../../data/FormPost";
import {toast} from "react-toastify";
import {useLocation} from "react-router-dom";

const Form = ({topic}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({defaultValues: {
            topic: topic ? topic : ""
        }})

    const onSubmit = (data) =>{
        if (data.topic === "nothing"){
            data.topic = null
        }
        if(data.support_fund === "nothing"){
            data.support_fund = null
        }
        postCash(data).then(res => {
            if(res.status === 200){
                toast.success("درخواست شما با موفقیت ثبت شد")
            }else{
                toast.error("لطفا اطلاعات را با دقت وارد نمایید")
            }
        }).catch(err => {
            toast.error("لطفا اطلاعات را با دقت وارد نمایید")
        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div>
                <Label htmlFor="full_name" value="نام و نام خانوادگی*"/>
                <TextInput  {...register("full_name", {required:true})} />
            </div>
            <div>
                <Label htmlFor="email" value="پست الکترونیکی"/>
                <TextInput  {...register("email")} />
            </div>
            <div>
                <Label htmlFor="phone_number" value="تلفن همراه*"/>
                <TextInput  {...register("phone_number", {required:true})} />
            </div>
            <div>
                <Label htmlFor="amount" value="میزان حمایت(به ریال)*"/>
                <TextInput {...register("amount", {required:true})} />
            </div>
            <div>
                <Label htmlFor="topic" value="موضوع*"/>
                <Select {...register("topic", {required:true})}>
                    <option value="">انتخاب نمایید</option>
                    <option value="studentSupport">
                        حمایت از دانشجویان
                    </option>
                    <option value="sports">
                        ورزشی
                    </option>
                    <option value="cultural">
                        فرهنگی
                    </option>
                    <option value="research">
                        پژوهشی
                    </option>
                    <option value="educational">
                        آموزشی
                    </option>
                    <option value="constructional">
                        عمرانی
                    </option>
                    <option value="nothing">
                        موضوعات دیگر
                    </option>
                </Select>
            </div>
            <div>
                <Label htmlFor="support_fund" value="صندوق حمایت*"/>
                <Select {...register("support_fund", {required:true})}>
                    <option value="">انتخاب نمایید</option>
                    <option value="agriculture">
                        دانشکده کشاورزی
                    </option>
                    <option value="technical">
                        دانشکده فنی و مهندسی و علوم کاربردی
                    </option>
                    <option value="social">
                        فعالیت های اجتماعی و فوق برنامه
                    </option>
                    <option value="nothing">
                        فرقی ندارد
                    </option>
                </Select>
            </div>
            {Object.keys(errors).length ? <p className="text-red-500">لطفا مقادیر ستاره دار را پر کنید.</p> : "" }
            <Button type="submit" color="success" className="w-full mt-5">
                پرداخت
            </Button>
        </form>

    )
}
const Cash: React.FC = () => {
    const { state } = useLocation();
    return (
        <Theme>
            <div className="w-full md:w-[60%] ml-auto mr-auto">
                <Form topic={state}/>
            </div>
        </Theme>
    )
};
export default Cash;

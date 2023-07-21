import React from 'react';
import {Theme} from "../../components";
import {useForm} from "react-hook-form"
import {Label, Select, TextInput, Button} from "flowbite-react";
import {postNonCash} from "../../data/FormPost";
import {toast} from "react-toastify";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data) => {
        if (data.topic === "nothing"){
            data.topic = null
        }
        if(data.support_type === "nothing"){
            data.support_type = null
        }
        postNonCash(data).then(res => {
            if (res.status === 200) {
                toast.success("درخواست شما با موفقیت ثبت شد")
            } else {
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
                <TextInput  {...register("full_name", {required: true})} />
            </div>
            <div>
                <Label htmlFor="phone_number" value="تلفن همراه*"/>
                <TextInput  {...register("phone_number", {required: true})} />
            </div>
            <div>
                <Label htmlFor="topic" value="موضوع*"/>
                <Select {...register("topic", {required: true})}>
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
                <Label htmlFor="support_type" value="روش*"/>
                <Select {...register("support_type", {required: true})}>
                    <option value="">انتخاب نمایید</option>
                    <option value="endowment">
                        وقف اموال
                    </option>
                    <option value="inheritance">
                        ارث
                    </option>
                    <option value="rent">
                        اجاره به شرط تملیک
                    </option>
                    <option value="expertise">
                        تخصص
                    </option>
                    <option value="nothing">
                        روش های دیگر
                    </option>
                </Select>
            </div>
            <div className="flex flex-col">
                <Label htmlFor="description" value="توضیحات"/>
                <textarea {...register(("description"))}/>
            </div>
            {Object.keys(errors).length ? <p className="text-red-500">لطفا مقادیر ستاره دار را پر کنید.</p> : ""}
            <Button type="submit" color="success" className="w-full mt-5">
                پرداخت
            </Button>
        </form>

    )
}
const NonCash: React.FC = () => {
    return (
        <Theme>
            <div className="w-full md:w-[60%] ml-auto mr-auto">
                <Form/>
            </div>
        </Theme>
    )
};
export default NonCash;

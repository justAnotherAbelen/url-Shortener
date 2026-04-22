import mongoose from "mongoose";
export declare const urlModel: mongoose.Model<{
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    shortUrl: string;
    clicks: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    fullUrl?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=urlSchema.d.ts.map
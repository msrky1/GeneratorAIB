import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): import("../../generated/prisma/models").Prisma__UserClient<{
        id: string;
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__UserClient<{
        id: string;
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): import("../../generated/prisma/models").Prisma__UserClient<{
        id: string;
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__UserClient<{
        id: string;
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}

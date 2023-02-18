// src/prisma/prisma.service.ts

/*
    See ADR-0002 for more information on why we need this service.
    We use this service as to not use PrismaClient directly in our
    controllers, services, and resolvers. This is because we need
    to close the PrismaClient connection when the application is
    shutting down.
    See also ADR-0003 which covers Prisma Module Singleton.
*/

import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    async enablesShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        }); // end $on('beforeExit')
    } // end enablesShutdownHooks()
} // end PrismaService class

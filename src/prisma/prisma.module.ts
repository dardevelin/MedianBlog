// src/prisma/prisma.module.ts

/*
    See ADR-0003 for more information on why we need this module.
    We use this module to provide the PrismaService as a singleton
    to the entire application. 
    A few of the benefits of this are:
    - Reuse: We can use the PrismaService in any module.
    - Memory Efficiency: One instance of PrismaClient is used.
    - Testability: We can mock the PrismaService in our tests.

    You can also see ADR-0002 which covers Prisma Service.
 */

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})

export class PrismaModule {}

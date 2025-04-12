import { PrismaClient } from '@prisma/client'

async function testConnection() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('✅ Database connection successful')
    
    // Test creating a user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        password: 'test-password'
      }
    })
    console.log('✅ Test user created:', user)
    
    await prisma.$disconnect()
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    process.exit(1)
  }
}

testConnection() 
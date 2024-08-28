import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/create-user.dto';
import { LoginUserDto } from './login-user.dto'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    // Vérifier si l'email existe déjà
    const existingUser = await this.userService.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email déjà utilisé');
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Création de l'utilisateur
    const user = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    // Génération du token JWT
    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findByEmail(loginUserDto.email);

    if (!user) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    // Génération du token JWT
    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}

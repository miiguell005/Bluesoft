USE [master]
GO
/****** Object:  Database [BluesoftTecnology]    Script Date: 12/07/2020 22:16:43 ******/
CREATE DATABASE [BluesoftTecnology]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BluesoftTecnology', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQL2019\MSSQL\DATA\BluesoftTecnology.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'BluesoftTecnology_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQL2019\MSSQL\DATA\BluesoftTecnology_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [BluesoftTecnology] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BluesoftTecnology].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BluesoftTecnology] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET ARITHABORT OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BluesoftTecnology] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BluesoftTecnology] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BluesoftTecnology] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BluesoftTecnology] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BluesoftTecnology] SET  MULTI_USER 
GO
ALTER DATABASE [BluesoftTecnology] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BluesoftTecnology] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BluesoftTecnology] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BluesoftTecnology] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [BluesoftTecnology] SET DELAYED_DURABILITY = DISABLED 
GO
USE [BluesoftTecnology]
GO
/****** Object:  Table [dbo].[Cargo]    Script Date: 12/07/2020 22:16:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Cargo](
	[IdCargo] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](max) NOT NULL,
	[Salario] [money] NOT NULL,
 CONSTRAINT [PK_Cargo] PRIMARY KEY CLUSTERED 
(
	[IdCargo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ControlSitioTrabajo]    Script Date: 12/07/2020 22:16:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ControlSitioTrabajo](
	[IdControlSitioTrabajo] [int] IDENTITY(1,1) NOT NULL,
	[IdTienda] [int] NOT NULL,
	[IdEmpleado] [int] NOT NULL,
	[FechaIngreso] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_ControlSitioTrabajo] PRIMARY KEY CLUSTERED 
(
	[IdControlSitioTrabajo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Empleado]    Script Date: 12/07/2020 22:16:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Empleado](
	[IdEmpleado] [int] IDENTITY(1,1) NOT NULL,
	[IdCargo] [int] NOT NULL,
	[Nombre] [varchar](255) NOT NULL,
	[Apellido] [varchar](255) NOT NULL,
	[NumeroDocumento] [varchar](50) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[Genero] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Empleado] PRIMARY KEY CLUSTERED 
(
	[IdEmpleado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Tienda]    Script Date: 12/07/2020 22:16:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Tienda](
	[IdTienda] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](255) NOT NULL,
	[Direccion] [varchar](255) NOT NULL,
	[Telefono] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Tienda] PRIMARY KEY CLUSTERED 
(
	[IdTienda] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Cargo] ON 

INSERT [dbo].[Cargo] ([IdCargo], [Descripcion], [Salario]) VALUES (1, N'Jerentes', 5000000.0000)
INSERT [dbo].[Cargo] ([IdCargo], [Descripcion], [Salario]) VALUES (2, N'Administrador', 1500000.0000)
SET IDENTITY_INSERT [dbo].[Cargo] OFF
SET IDENTITY_INSERT [dbo].[ControlSitioTrabajo] ON 

INSERT [dbo].[ControlSitioTrabajo] ([IdControlSitioTrabajo], [IdTienda], [IdEmpleado], [FechaIngreso]) VALUES (1, 1, 1, CAST(N'2020-07-12 00:00:00.0000000' AS DateTime2))
INSERT [dbo].[ControlSitioTrabajo] ([IdControlSitioTrabajo], [IdTienda], [IdEmpleado], [FechaIngreso]) VALUES (2, 3, 3, CAST(N'2020-07-11 00:00:00.0000000' AS DateTime2))
INSERT [dbo].[ControlSitioTrabajo] ([IdControlSitioTrabajo], [IdTienda], [IdEmpleado], [FechaIngreso]) VALUES (3, 3, 3, CAST(N'2020-07-12 00:00:00.0000000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[ControlSitioTrabajo] OFF
SET IDENTITY_INSERT [dbo].[Empleado] ON 

INSERT [dbo].[Empleado] ([IdEmpleado], [IdCargo], [Nombre], [Apellido], [NumeroDocumento], [FechaNacimiento], [Genero]) VALUES (1, 2, N'Juanito', N'Perez', N'1014258222', CAST(N'2003-06-18 00:00:00.0000000' AS DateTime2), N'Masculino')
INSERT [dbo].[Empleado] ([IdEmpleado], [IdCargo], [Nombre], [Apellido], [NumeroDocumento], [FechaNacimiento], [Genero]) VALUES (3, 1, N'Jhon', N'Romero', N'123123', CAST(N'2020-07-11 00:00:00.0000000' AS DateTime2), N'Masculino')
SET IDENTITY_INSERT [dbo].[Empleado] OFF
SET IDENTITY_INSERT [dbo].[Tienda] ON 

INSERT [dbo].[Tienda] ([IdTienda], [Nombre], [Direccion], [Telefono]) VALUES (1, N'Prueba1', N'calle 67  #105 - 30', N'4350362')
INSERT [dbo].[Tienda] ([IdTienda], [Nombre], [Direccion], [Telefono]) VALUES (3, N'Test 2', N'cra 105 - 39 - 20', N'1231233')
SET IDENTITY_INSERT [dbo].[Tienda] OFF
ALTER TABLE [dbo].[ControlSitioTrabajo]  WITH CHECK ADD  CONSTRAINT [FK_ControlSitioTrabajo_Empleado] FOREIGN KEY([IdEmpleado])
REFERENCES [dbo].[Empleado] ([IdEmpleado])
GO
ALTER TABLE [dbo].[ControlSitioTrabajo] CHECK CONSTRAINT [FK_ControlSitioTrabajo_Empleado]
GO
ALTER TABLE [dbo].[ControlSitioTrabajo]  WITH CHECK ADD  CONSTRAINT [FK_ControlSitioTrabajo_Tienda] FOREIGN KEY([IdTienda])
REFERENCES [dbo].[Tienda] ([IdTienda])
GO
ALTER TABLE [dbo].[ControlSitioTrabajo] CHECK CONSTRAINT [FK_ControlSitioTrabajo_Tienda]
GO
ALTER TABLE [dbo].[Empleado]  WITH CHECK ADD  CONSTRAINT [FK_Empleado_Cargo] FOREIGN KEY([IdCargo])
REFERENCES [dbo].[Cargo] ([IdCargo])
GO
ALTER TABLE [dbo].[Empleado] CHECK CONSTRAINT [FK_Empleado_Cargo]
GO
USE [master]
GO
ALTER DATABASE [BluesoftTecnology] SET  READ_WRITE 
GO

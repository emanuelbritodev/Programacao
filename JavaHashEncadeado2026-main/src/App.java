import java.time.LocalDate;
import java.util.Scanner;

public class App {

    // Lê um cupom digitado pelo usuário
    public static Cupom lerCupom(Scanner sc) {
        System.out.print("Código do cupom: ");
        long codigo = sc.nextLong();
        System.out.print("Percentual de desconto: ");
        double desconto = sc.nextDouble();
        System.out.print("Data de validade (AAAA-MM-DD): ");
        LocalDate dataValidade = LocalDate.parse(sc.next());
        return new Cupom(codigo, desconto, dataValidade);
    }

    private static int menu(Scanner scanner) {
        System.out.println("\n\t\t*** IFSULDEMINAS - CAMPUS MACHADO ***");
        System.out.println("\t\t*** Estrutura de Dados I ***");
        System.out.println("\t\t*** HASH ENCADEADO - Separate Chaining ***");
        System.out.println("1 - Cadastrar cupom");
        System.out.println("3 - Usar cupom");
        System.out.println("0 - Sair");
        System.out.print("Escolha uma opcao: ");
        return scanner.nextInt();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CustomHashMap<Cupom> meuHashMap = new CustomHashMap<>();

        int op;
        do {
            op = menu(scanner);
            switch (op) {

                case 1:
                    // Cadastrar cupom
                    Cupom cupom = lerCupom(scanner);
                    meuHashMap.put(cupom.getCodigo(), cupom);
                    System.out.println("Cupom cadastrado: " + cupom);
                    break;

                case 3:
                    // Usar cupom
                    System.out.print("Cupom para uso: ");
                    long codigo = scanner.nextLong();

                    Cupom encontrado = meuHashMap.get(codigo);

                    if (encontrado == null) {
                        System.out.println("Cupom não encontrado!");
                        break;
                    }

                    System.out.println("Desconto encontrado: " + encontrado.getDesconto());

                    if (encontrado.getDataValidade().isBefore(LocalDate.now())) {
                        System.out.println("Cupom vencido!");
                    } else {
                        System.out.print("Cupom válido - Valor da compra: ");
                        double valorCompra = scanner.nextDouble();
                        double desconto = valorCompra * encontrado.getDesconto() / 100;
                        double valorFinal = valorCompra - desconto;
                        System.out.printf("Valor com desconto: %.2f%n", valorFinal);
                    }
                    System.out.println("----------------------------------------------");
                    break;

                case 0:
                    System.out.println("Saindo...");
                    break;

                default:
                    System.out.println("Opcao invalida.");
                    break;
            }

        } while (op != 0);

        scanner.close();
    }
}

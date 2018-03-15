import java.io.*;

class SpellGenerator {
    public static void main(String args[]) throws IOException {
        fileGenerator(1);
    }

    public static void fileGenerator(int level) throws IOException {
        FileReader fr = new FileReader("spells.txt");
        BufferedReader reader = new BufferedReader(fr);

        BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"));
        String spellName;
        while ((spellName = reader.readLine()) != null){
            spellName = spellName.replaceAll(" ", "");
            String out = "'" + spellName + "' : {'name' : '" + spellName + "' , 'level' : " + level + "},";
            writer.write(out);
            writer.newLine();
        }
        writer.close();
        reader.close();
    }
}

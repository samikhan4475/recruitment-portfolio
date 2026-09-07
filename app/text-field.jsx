import { Flex, Text, TextField } from "@radix-ui/themes";

export default function InputField({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
}) {
  return (
    <Flex gap="1" direction="column">
      <Text
        as="label"
        className="text-[#1e2761] text-sm"
        weight="bold"
      >
        {label}
      </Text>

      <TextField.Root
        size="3"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`h-12! ${className}`}
      />
    </Flex>
  );
}
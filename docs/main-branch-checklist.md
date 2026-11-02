# Repository checklist

Changes have reached main without review or a passing CI check, so main must be protected before more work is merged.

## Main branch rule

- [ ] Rule applies to the default branch, main.
- [ ] Require a pull request before merging. Required approvals: 0 (the team is small; the CI check is the gate).
- [ ] Require status checks to pass before merging, with the `test` check from the CI workflow selected.
- [ ] Block force pushes.
- [ ] Restrict deletions, so main cannot be deleted.
- [ ] No bypass list. The rule applies to everyone, including administrators.

## Security settings

- [ ] Dependabot alerts turned on.

## How to verify

1. A direct commit to main from the web editor is refused.
2. A change reaches main only through a pull request whose `test` check has passed.
